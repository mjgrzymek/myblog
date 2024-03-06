const std = @import("std");

const walloc = std.heap.wasm_allocator;

const Person = struct {
    id: i32,
    name: []u8,
};

export fn reverseNames(s: [*]u8, length: usize, capacity: usize) i32 {
    const input = s[0..length];
    const parsed = std.json.parseFromSlice([]Person, walloc, input, .{}) catch return -1;
    defer parsed.deinit();
    const people = parsed.value;

    for (people) |x| {
        std.mem.reverse(u8, x.name);
    }

    var output = std.ArrayList(u8).init(walloc);
    defer output.deinit();
    std.json.stringify(people, .{}, output.writer()) catch return -2;

    const outputLength = output.items.len;
    if (outputLength > capacity) {
        return -3;
    }
    std.mem.copy(u8, s[0..outputLength], output.items);
    return @as(i32, @intCast(outputLength));
}
