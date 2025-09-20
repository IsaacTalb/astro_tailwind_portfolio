export default {
  tags: {
    callout: {
      render: 'Callout',
      attributes: {
        type: { type: String, required: false, default: 'info' },
        title: { type: String, required: false },
      }
    },

    //  Image tag
    img: {
      render: 'img',
      attributes: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
        width: { type: String, required: false },
        height: { type: String, required: false },
      }
    },

    //  Video tag
    video: {
      render: 'video',
      attributes: {
        src: { type: String, required: true },
        width: { type: String, required: false },
        height: { type: String, required: false },
        controls: { type: Boolean, required: false, default: true },
        autoplay: { type: Boolean, required: false, default: false },
        loop: { type: Boolean, required: false, default: false },
        muted: { type: Boolean, required: false, default: false },
      }
    },

    //  Iframe tag
    iframe: {
      render: 'iframe',
      attributes: {
        src: { type: String, required: true },
        width: { type: String, required: false },
        height: { type: String, required: false },
        frameborder: { type: String, required: false, default: '0' },
        allowfullscreen: { type: Boolean, required: false, default: true },
      }
    },

    //  Div tag
    div: {
      render: 'div',
      attributes: {
        class: { type: String, required: false },
        style: { type: String, required: false },
        id: { type: String, required: false },
      }
    }
  },
};

