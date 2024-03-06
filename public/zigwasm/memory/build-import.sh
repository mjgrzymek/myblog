#!/bin/bash
zig build-lib json.zig -target wasm32-freestanding -dynamic --export=reverseNames -O ReleaseFast --import-memory
