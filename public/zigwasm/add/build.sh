#!/bin/sh
zig build-lib add.zig -target wasm32-freestanding -dynamic --export=add -O ReleaseFast
