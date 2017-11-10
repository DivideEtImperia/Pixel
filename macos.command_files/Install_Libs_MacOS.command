#!/bin/bash

cd "$(dirname "$BASH_SOURCE")" || {
	echo "NodeJS does not seem to be installed." >&2
exit 1
}

cd ../
npm install --no-optional