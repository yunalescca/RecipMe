package com.recipme.dataformat;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.immutables.value.Value;

@Value.Immutable
@JsonSerialize(as = ImmutableTestData.class)
public
interface TestData {
    int getId();
    String getName();
}
