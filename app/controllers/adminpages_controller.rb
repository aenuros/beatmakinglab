class AdminpagesController < ApplicationController
  before_action :set_tutorial, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action do
    redirect_to new_user_session_path unless current_user && current_user.admin?
  end

  def seeadmin
    @tutorials = Tutorial.all
    @tutorial = Tutorial.new
  end

  def posts_admin
    @posts = Post.all
    @post = Post.new
  end
end
