function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
     <url>
       <loc>https://visszajaro.com</loc>
        <image:image>
            <image:loc>https://visszajaro.com/assets/</image:loc>
        </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/applikacio-nelkul.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/bg2.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/bg3.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/bg4.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/bontott-fizetes.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/erintesmentes-fizetes.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/fogyasztas-kovetes.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/szemelyre-szabhato-torzsvendeg-rendszer.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/torzsvendeg-1.webp</image:loc>
            </image:image>
        <image:image>
                <image:loc>https://visszajaro.com/assets/torzsvendeg-2.webp</image:loc>
            </image:image>
        <image:image>
            <image:loc>https://visszajaro.com/assets/torzsvendeg-3.webp</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://visszajaro.com/assets/vendeglatas.webp</image:loc>
        </image:image>
     </url>
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res: any }) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;