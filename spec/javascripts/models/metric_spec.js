"use strict";

describe('Metric Model', function() {

  it("has default urlRoot", function() {
    var metric = new window.app.models.Metric();
    expect(metric.urlRoot).toBe("/api/metrics");
  });
});
