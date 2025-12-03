import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Dynamic title from query params, with default
  const title = searchParams.get('title') || 'Build Intelligence';
  const subtitle = searchParams.get('subtitle') || 'AI Solutions & Custom Software Development';

  // Fetch the logo image
  const logoUrl = new URL('/img/logo-512.png', request.url).toString();
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());
  const logoBase64 = `data:image/png;base64,${Buffer.from(logoData).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, #000000 50%), radial-gradient(circle at 75% 75%, #16213e 0%, #000000 50%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Logo image */}
        <img
          src={logoBase64}
          width={140}
          height={140}
          style={{
            marginBottom: 40,
            borderRadius: 24,
          }}
        />
        
        {/* Company name */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: 16,
            letterSpacing: '-2px',
          }}
        >
          Eclipse Softworks
        </div>
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            fontWeight: 600,
            color: '#e5e5e5',
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#a1a1aa',
            maxWidth: 800,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </div>
        
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          }}
        />
        
        {/* Corner accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16, color: '#71717a' }}>eclipse-softworks.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
