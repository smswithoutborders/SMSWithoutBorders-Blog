#!/bin/sh

# Set default base URL
BASEURL="http://$SERVER_NAME"

# Check if SSL_PORT is set and not equal to 443
if [[ -n "$SSL_PORT" ]]; then
    if [[ "$SSL_PORT" != "443" ]]; then
        BASEURL="https://$SERVER_NAME:$SSL_PORT"
    else
        BASEURL="https://$SERVER_NAME"
    fi
    # Check if PORT is set and not equal to 80
    elif [[ -n "$PORT" && "$PORT" != "80" ]]; then
    BASEURL="http://$SERVER_NAME:$PORT"
fi

# Generate the .env.local file
cat <<EOF > .env.local
BASE_URL=$BASEURL
EOF
