import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  // Fetch the pre-designed OG image
  const ogImageUrl = new URL('/img/og/OG-Eclipse Logo Design 1200x630.png', request.url).toString();
  const imageData = await fetch(ogImageUrl).then((res) => res.arrayBuffer());
  const imageBase64 = `data:image/png;base64,${Buffer.from(imageData).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
        }}
      >
        <img
          src={imageBase64}
          width={1200}
          height={630}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
