class TutorialsController < ApplicationController
  before_action :set_tutorial, only: [:show, :edit, :update, :destroy]

# GET /tutorials
# GET /tutorials.json
  def index
    @tutorials = Tutorial.all
    @tutorial = Tutorial.new
    respond_to do |format|
      format.html
      format.json{ render json: @tutorials}
    end
  end

# GET /tutorials/1
# GET /tutorials/1.json
  def show
  end

  # GET /tutorials/new
  def new
    @tutorial = Tutorial.new
    @tutorials = Tutorial.all
  end

# GET /tutorials/1/edit
  def edit

  end

# POST /tutorials
# POST /tutorials.json
  def create
    @tutorials = Tutorial.all
    @tutorial = Tutorial.new(tutorial_params)


      if @tutorial.save
        respond_to do |format|
          format.html do
            redirect_to tutorials_path, notice: 'Tutorial was successfully created.'
          end
          format.json do
            render json: @tutorial
          end
        end
      else
      respond_to do |format|
        format.html do
          redirect_to tutorials_path, alert: @tutorial.errors.full_messages.join(', ')
        end
        format.json do
          render json: @tutorial.errors.full_messages, status: 400
        end
      end
    end
  end

# PATCH/PUT /tutorials/1
# PATCH/PUT /tutorials/1.json
  def update
    respond_to do |format|
      if @tutorial.update(tutorial_params)
        format.html { redirect_to @tutorial, notice: "Tutorial was successfully updated."}
        format.json {render :show, status: ok, location: @tutorial}
      else
        format.html { render :edit }
        format.json { render json: @tutorial.errors, status: :unprocessable_entity}
      end
    end
  end

# DELETE /tutorials/1
# DELETE  /tutorials/1.json
  def destroy
    @tutorial.destroy
      respond_to do |format|
        format.html { redirect_to tutorials_url, notice: 'Tutorial was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

# admin view
  def admin
    @tutorials = Tutorial.all
  end

private
 # Use callbacks to share common setup or constraints between actions.

 def set_tutorial
   @tutorial = Tutorial.find(params[:id])
 end

#don't trust
def tutorial_params
  params.require(:tutorial).permit(:name,:description,:link)
  # params.require(:tutorial).permit(:description)
end

end
