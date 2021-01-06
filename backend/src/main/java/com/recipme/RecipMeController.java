package com.recipme;

import com.recipme.dataformat.TestData;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipMeController {
    private static final String template = "Hello, %s!";
    private final AtomicInteger counter = new AtomicInteger();

    @GetMapping("/greeting")
    public TestData greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new TestData(counter.incrementAndGet(), String.format(template, name));
    }
}
