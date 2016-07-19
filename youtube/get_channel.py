#!/usr/bin/python

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser

'''
pip install --upgrade google-api-python-client
https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br
https://console.cloud.google.com/apis/credentials
'''


# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
DEVELOPER_KEY = "AIzaSyDlvr3UhGYeXnvh0WJQ0FzTkFcOI1qR2_0"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

def youtube_search(options):
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

  # Call the search.list method to retrieve results matching the specified
  # query term.
  search_response = youtube.search().list(
    part="id,snippet",
    channelId=options.channel, 
    maxResults=options.max_results
  ).execute()

  videos = []
  channels = []
  playlists = []

  # Add each result to the appropriate list, and then display the lists of
  # matching videos, channels, and playlists.
  for search_result in search_response.get("items", []):

    #print(search_result["id"]["kind"])

    if search_result["id"]["kind"] == "youtube#video":
      videos.append("%s (%s) (%s)" % (search_result["snippet"]["title"], "", "")) #search_result["id"]["videoId"], search_result["snippet"]["description"]))

    elif search_result["id"]["kind"] == "youtube#channel":
      channels.append("%s (%s)" % (search_result["snippet"]["title"],search_result["id"]["channelId"]))
    
    elif search_result["id"]["kind"] == "youtube#playlist":
      playlists.append("%s (%s)" % (search_result["snippet"]["title"], search_result["id"]["playlistId"]))
  
  s = "Videos:\n" + "\n".join(videos) + "\n"
  c = "Channels:\n" + "\n".join(channels) + "\n"
  p = "Playlists:\n" + "\n".join(playlists) + "\n"

  print(s)
  print(c)
  print(p)


if __name__ == "__main__":
  argparser.add_argument("--channel", help="Channel", default="UCKtpVD3Plw6oV0uaGVJddwg") #Python Tutorials (https://www.youtube.com/channel/UCKtpVD3Plw6oV0uaGVJddwg)
  argparser.add_argument("--max-results", help="Max results", default=25)
  args = argparser.parse_args()

  try:
    youtube_search(args)
  except HttpError as e:
    print("An HTTP error %d occurred:\n%s" % (e.resp.status, e.content))

    list1  = []
