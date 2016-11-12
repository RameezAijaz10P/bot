module Rest
  module V1
    class TimesheetController < ApplicationController
      # creates new clock_in entry and updates the clock_out
      def clock
         action = params[:test]
         time = Time.now.in_time_zone("Central Time (US & Canada)")
         currenttime = time.strftime("%I:%M %P")

        if action == "clock_in"
          @timesheet = Timesheet.new(project_id: params[:project_id],
                                  user_id: params[:project_id],
                                  slack: params[:slack],date: time.to_date, start_time: currenttime)
          if @timesheet.save
            render json: {status: "success", data: @timesheet}, status: :created
          else
            render json: { errors: @timesheet.errors }, status: :unprocessable_entity
          end

      elsif action == "clock_out"
        @timesheet = Timesheet.where('user_id = ? AND project_id = ? AND end_time IS ?', params[:user_id], params[:project_id], nil)
        if @timesheet.update(end_time: currenttime)
          render json: {status: "success", data: @timesheet}, status: :ok
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
  end
end
end
