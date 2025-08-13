#!/bin/sh

# Generate config.js with environment variables
cat > /usr/share/nginx/html/config.js << EOF
window.__ENV__ = {
  API_BASE_URL: '${API_BASE_URL:-http://localhost:4000/api/v1/todos}'
};
EOF

# Start nginx
nginx -g 'daemon off;'