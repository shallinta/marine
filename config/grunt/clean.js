'use strict';

export default {
  dist: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        '<%=ma.path.dist%>/*'
      ]
    }]
  },
  server: '.tmp'
};
