module Rest
  module V1
    class TimesheetController < ApplicationController
      # creates new clock_in entry and updates the clock_out
      def clock
         action = params[:test]
         time = Time.now.tomorrow.in_time_zone("Central Time (US & Canada)")
         currenttime = time.strftime("%I:%M %P")

        if action == "clock_in"
          @timesheet = Timesheet.new(project_id: params[:project_id],
                                  user_id: params[:project_id],
                                  slack: params[:slack],date: time.to_date, start_time: currenttime)
          if @timesheet.save
            render json: {status: "success"}, status: :OK
          else
            render json: { errors: @timesheet.errors }, status: :unprocessable_entity
          end

        elsif action == "clock_out"
              @timesheet = Timesheet.where('user_id = ? AND project_id = ? AND end_time IS ?', params[:user_id], params[:project_id], nil)
              start = @timesheet.pluck(:start_time)
              endtime = Time.parse(currenttime)
              starttime = Time.parse(start[0].strftime("%I:%M %P"))
              hours = ((endtime - starttime)/ 1.hour).round(2)

              if @timesheet.update(end_time: currenttime,hours: hours)
                render json: {status: "success"}, status: :ok
              else
                render json: { errors: @timesheet.errors }, status: :unprocessable_entity
              end
            end
          end
          # fetch the history for given date
          def history
            if params['start_date']!= nil && params['end_date'] != nil
              @start_date = params['start_date'].to_date
              @end_date = params['end_date'].to_date
              @timesheet = Timesheet.where(date: @start_date..@end_date)

          else
            @timesheet = Timesheet.all
          end
              render json: {status: "success", data: @timesheet}
          end

          #fetch the hours for the dates in the table
          def hours
            @timesheet = Timesheet.select("hours,date").where('user_id = ?', params[:user_id]).group('date').sum(:hours)
            @newtimesheet = Hash.new
            array = []
            @timesheet.each_pair { |key, value|

              @newtimesheet["date"]= key
              @newtimesheet["hours"]= value
              array.push(@newtimesheet)

            }
            puts array
            render json: array
            end
          end
      end
      end
