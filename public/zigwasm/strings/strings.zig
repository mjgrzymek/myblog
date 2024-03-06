const std = @import("std");

export fn doubleString(s: [*]u8, length: usize, capacity: usize) i32 {
    if (capacity < length * 2) {
        return -1;
    }
    const left = s[0..length];
    const right = s[length .. length * 2];
    std.mem.copy(u8, right, left);
    return @as(i32, @intCast(length)) * 2;
}
