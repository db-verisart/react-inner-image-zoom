import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './docs.css';

const Docs = () => {
  return(
    <div className="docs">
      <h2 className="docs__heading">Docs</h2>

      <nav className="docs__nav">
        <HashLink to="#installation">Installation</HashLink>
        <HashLink to="#styling">Styling</HashLink>
        <HashLink to="#usage">Usage</HashLink>
        <HashLink to="#props">Props</HashLink>
      </nav>

      <section className="docs__content">
        <div>
          <h3 id="installation">Installation</h3>
          <h4>NPM</h4>
          <pre className="docs__code"><code>npm install react-inner-image-zoom</code></pre>
          <h4>Yarn</h4>
          <pre className="docs__code"><code>yarn add react-inner-image-zoom</code></pre>
        </div>

        <div>
          <h3 id="styling">Styling</h3>
          <h4>Download</h4>
          <p>Grab the raw CSS from Github to use however you see fit:</p>
          <p><a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css" target="_blank" rel="noopener noreferrer">styles.css</a></p>
          <p>or the minified version:</p>
          <p><a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.min.css" target="_blank" rel="noopener noreferrer">styles.min.css</a></p>
          <h4>Import</h4>
          <p>If your setup supports it, import the CSS directly from your node_modules:</p>
          <pre className="docs__code"><code>import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';</code></pre>
          <p>or the minified version:</p>
          <pre className="docs__code"><code>import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';</code></pre>
        </div>

        <div>
          <h3 id="usage">Usage</h3>
          <p>Import and render the component:</p>

          <pre className="docs__code"><code>
            {`import InnerImageZoom from 'react-inner-image-zoom';\n\n...\n\n<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />`}
          </code></pre>
        </div>

        <div>
          <h3 id="props">Props</h3>

          <ul className="docs__props-list">
            <li><b>src (String): </b>Required. URL for the original image.</li>
            <li><b>srcSet (String): </b>Default srcset attribute for a responsive original image.</li>
            <li><b>sizes (String): </b>Default sizes attribute for use with srcset.</li>
            <li><b>sources (Array): </b>A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).</li>
            <li><b>zoomSrc (String): </b>URL for the larger zoom image. Falls back to original image src if not defined.</li>
            <li><b>alt (String): </b>Alternative text for the original image.</li>
            <li><b>moveType (String): </b>Default pan. Accepts pan or drag options. The user behavior for moving zoomed images on non-touch devices.</li>
            <li><b>fadeDuration (Number): </b>Default 150. Fade transition time in milliseconds. If zooming in on transparent images, set this to 0 for best results.</li>
            <li><b>fullscreenOnMobile (Boolean): </b>Default false. Enables fullscreen zoomed image on touch devices below a specified breakpoint.</li>
            <li><b>mobileBreakpoint (Number): </b>Default 640. The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.</li>
            <li><b>className (String): </b>Custom classname for styling the component.</li>
            <li><b>afterZoomIn (Function): </b>Function to be called after zoom in.</li>
            <li><b>afterZoomOut (Function): </b>Function to be called after zoom out.</li>
          </ul>

          <h4>Sources</h4>
          <p>This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">here</a>: </p>

          <ul className="docs__props-list">
            <li><b>srcSet (String): </b>Srcset attribute for source tag.</li>
            <li><b>sizes (String): </b>Sizes attribute for source tag.</li>
            <li><b>media (String): </b>An attribute containing a media condition for use with the srcset.</li>
            <li><b>type (String): </b>An image MIME type. This is useful for using newer formats like WebP.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Docs;