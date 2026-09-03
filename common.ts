import { Page } from '@playwright/test';

export async function brokenlinkchecker(url: string, page: Page) {

     await page.goto(url, { waitUntil: 'networkidle' });

    //const links = await page.locator("a").all();

    const links = await page.$$('a');
    
    console.log(`Total links found: ${links.length}`);

    for (const link of links) {
        const href = await link.getAttribute('href');
        let text= await link.textContent();
        text = text?.trim() || '';

        if (href) {
            const url = new URL(href, page.url());

            // Playwright's API request context supports HTTP(S), not file URLs.
            if (!['http:', 'https:'].includes(url.protocol)) {
                console.log(`SKIPPING: ${href} --> Unsupported protocol: ${url.protocol} for link text: ${text}`);
                continue;
            }

            let status: number;
            try {
                const response = await page.request.get(url.toString(), {
                    failOnStatusCode: false,
                });
                status = response.status();
            } catch (error) {
                console.log(`REQUEST ERROR: ${href} --> ${error} for link text: ${text}`);
                continue;
            }

            // expect(response.status()).toBeLessThan(400);
            if (status >= 200 && status < 300) {
                console.log(`VALID: ${href} --> ${status} Ok for link text: ${text}`);
            }
            else if (status >= 300 && status < 400) {
                console.log(`REDIRECT: ${href} --> ${status} for link text: ${text}`);
            }
            if (status === 404 || status === 410) {
                console.log(`BROKEN LINK: ${status} for link text: ${text}`);
            }
            else if (status >= 400 && status < 500) {
                console.log(`CLIENT ERROR: ${href} --> ${status} for link text: ${text}`);
            }
            else if (status >= 500) {
                console.log(`SERVER ERROR: ${href} --> ${status} for link text: ${text}`);
            }

            
        }
    }



}


//Function to return date and time in a string format
export function getTimestamp(): string {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yy = String(now.getFullYear()).slice(-2);

    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    return `${dd}${mm}${yy} ${hh}${min}${ss}`;
}

