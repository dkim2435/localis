class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
   render json: @reviews, include: [:event, :user]
  end
  def new
    @review = Review.new(review_params)
  end

  def create
      @review = Review.new(review_params)
      if @review.save
          render json: @review, status: :created
      else
          render json: @review.errors.full_messages, status: :unprocessable_entity
      end
  end

  def destroy
      @review = Review.find(params[:id])
      @review.destroy

      render json: @reviews
  end

  private

  def review_params
      params.require(:review).permit(:description, :user_id, :event_id)
  end
end
