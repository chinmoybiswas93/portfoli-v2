const API_URL = process.env.WORDPRESS_API_URL_LIVE;
const API_TOKEN = process.env.WORDPRESS_AUTH_REFRESH_TOKEN_LIVE;

async function getData(param, method = "GET", body = null, token = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${API_TOKEN}`;
  }

  const options = {
    method: method,
    headers: headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${API_URL}${param}`, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Get Settings
export async function getSettings() {
  const res = await getData("settings", "POST", null, true);
  return res;
}

// Get All Posts
// Get All Posts
export async function getPosts(numberOfPosts) {
  let apiUrl = "posts";
  if (numberOfPosts) {
    apiUrl += `?per_page=${numberOfPosts}`;
  }
  const res = await getData(apiUrl);
  return res;
}

// Get Post Details By Id
export async function getPostByID(id) {
  const res = await getData(`posts/${id}`);
  return res;
}

// Get Post Feature image
export async function getPostFeaturedImage(id) {
  const { featured_media } = await getPostByID(id);
  const data = await getData(`media/${featured_media}`);
  return data;
}

// Get All Jobs
export async function getJobs() {
  const res = await getData("jobsbydate");
  return res;
}

// Get All Jobs
export async function getJobByID(id) {
  const res = await getData(`jobs/${id}`);
  return res;
}

// Get all projects
