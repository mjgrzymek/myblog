#!/bin/sh
zig build-lib foo.zig -target wasm32-freestanding -dynamic --export=add -O ReleaseFast
