json.extract! @video, :id, :title, :views, :description, :likes, :created_at
json.videoUrl url_for(@video.video_file)
json.thumbnailUrl url_for(@video.thumbnail)
json.uploader @video.uploader, :id, :username, :email
