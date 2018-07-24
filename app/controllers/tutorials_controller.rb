class TutorialsController < ApplicationController
  before_action :set_tutorial, only: [:show, :edit, :update, :destroy]

def react
  @tutorials = Tutorial.all
end


def trythis
  @tutorials = Tutorial.all
end

def learn
  @tutorials = Tutorial.all
end

# GET /tutorials
# GET /tutorials.json
  def index
    @tutorials = Tutorial.all

    respond_to do |format|
      format.html
      format.json do
        render json: @tutorials
    end
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
        render json: @tutorial
      else
        render json: @tutorial.errors.full_messages, status:400
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
    @tutorial = Tutorial.find(params[:id])
    @tutorial.destroy
    render json: @tutorial
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
