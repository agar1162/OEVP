import React, { useEffect } from 'react';

const InstagramPostEmbed = ({ postId }) => {
  useEffect(() => {
    // Dynamically add the Instagram embed script
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js"; // Use HTTPS for secure embedding
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="m-[10%]">
      <blockquote 
        className="instagram-media" 
        data-instgrm-captioned 
        data-instgrm-permalink={`https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
      >
        <div style={{ padding: '16px' }}>
          <a 
            href={`https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
            style={{ textDecoration: 'none', color: '#3897f0' }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramPostEmbed;
