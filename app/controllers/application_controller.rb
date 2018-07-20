class ApplicationController < ActionController::Base

# Don't require authenticity token when forms aren't submitted
  skip_before_action :verify_authenticity_token, if: :json_request?   

private

  def json_request?
    request.format.json?
  end


end
