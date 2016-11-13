# README

Endpoints:

1. clock-in and clock-out => POST -- rest/v1/timesheet/:test
   
   WHERE test = "clock_in/clock_out"
   Parameters: user_id, proj_id(project ID) , slack
   
   Response: Success/Failure
   
2. History => GET -- rest/v1/timesheet/history?start_date=&end_date=
   
   
   Parameters: start_date, end_date
   
   Response: {"status":"success","data":[{"id":1,"date":"2016-11-13","start_time":"2000-01-01T13:17:00.000Z","end_time":"2000-01-01T13:18:00.000Z","slack":0,"hours":3.2,"liquid_planner":null,"project_id":1,"user_id":1,"created_at":"2016-11-13T19:17:51.951Z","updated_at":"2016-11-13T19:18:17.554Z"},{"id":2,"date":"2016-11-13","start_time":"2000-01-01T13:24:00.000Z","end_time":null,"slack":0,"hours":null,"liquid_planner":null,"project_id":2,"user_id":1,"created_at":"2016-11-13T19:24:35.186Z","updated_at":"2016-11-13T19:24:35.186Z"}]

3. Hours grouped by the dates => GET -- rest/v1/timesheet/hours/:user_id
   
   Parameters: user_id
   
   
   Response: [{"date":"2016-11-13","hours":3.2}]

