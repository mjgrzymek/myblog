var i: i32 = 3;
export fn add(a: i32, b: i32) i32 {
    i += 1;
    return a + b + i;
}
