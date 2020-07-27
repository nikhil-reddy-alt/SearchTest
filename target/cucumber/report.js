$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/nik/runner/GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Searching Keyword (Cheese / Bread in data table) in Google",
  "description": "As a site user\nIf I search for keyword\nThe page title should contains the keyword",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"\u003cScreenSize\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"\u003cKeyword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"\u003cKeyword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;",
  "rows": [
    {
      "cells": [
        "ScreenSize",
        "Keyword"
      ],
      "line": 14,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;1"
    },
    {
      "cells": [
        "desktop",
        "cheese"
      ],
      "line": 15,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;2"
    },
    {
      "cells": [
        "mobile",
        "bread"
      ],
      "line": 16,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened(String)"
});
formatter.result({
  "duration": 27746842500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027NIKHILREDDY\u0027, ip: \u0027192.168.29.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:593)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:139)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:160)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:117)\r\n\tat com.nik.base.BaseScenario.getDriver(BaseScenario.java:56)\r\n\tat com.nik.runner.stepdef.CommonStepDef.the_web_site_is_opened(CommonStepDef.java:162)\r\n\tat ✽.Given The web site is opened as \"desktop\"(com/nik/runner/GoogleSearch.feature:8)\r\nCaused by: java.lang.IllegalStateException: The process has not exited yet therefore no result is available ...\r\n\tat org.apache.commons.exec.DefaultExecuteResultHandler.getException(DefaultExecuteResultHandler.java:74)\r\n\tat org.openqa.selenium.os.UnixProcess.checkForError(UnixProcess.java:165)\r\n\tat org.openqa.selenium.os.CommandLine.checkForError(CommandLine.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:170)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:572)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:139)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:160)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:117)\r\n\tat com.nik.base.BaseScenario.getDriver(BaseScenario.java:56)\r\n\tat com.nik.runner.stepdef.CommonStepDef.the_web_site_is_opened(CommonStepDef.java:162)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "cheese",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "cheese",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"bread\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"bread\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened(String)"
});
formatter.result({
  "duration": 29722398900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "bread",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "duration": 1021751700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "duration": 2001048300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "duration": 4322362400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bread",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "duration": 20308200,
  "status": "passed"
});
});