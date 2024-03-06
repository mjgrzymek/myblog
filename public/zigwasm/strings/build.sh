#!/bin/sh
zig build-lib strings.zig -target wasm32-freestanding -dynamic --export=doubleString -O ReleaseFast
