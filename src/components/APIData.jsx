import React, { useState, useEffect } from 'react';
import { englishPostsAPI } from '../api/englishPosts'; // Use the English API
import Button from './Button';
import Card from './Card';

const APIData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await englishPostsAPI.getPosts(currentPage, 6);
      setPosts(data.posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-8" hover>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Web Development Articles
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Latest articles about React, JavaScript, and modern web development
        </p>
      </div>

      {/* Search and Controls */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
        />
        <Button
          variant="secondary"
          onClick={fetchPosts}
          disabled={loading}
        >
          🔄 Refresh
        </Button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <Card className="text-center py-8 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
            Failed to load articles
          </h3>
          <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
          <Button variant="primary" onClick={fetchPosts}>
            Try Again
          </Button>
        </Card>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <p className="text-gray-500 dark:text-gray-400">No articles found matching your search.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <Card key={post.id} className="p-4 hover:scale-105 transition-transform" hover>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                      Article #{post.id}
                    </span>
                    <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs font-medium rounded-full ml-2">
                      User {post.userId}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {post.body}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </Button>
            
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Page {currentPage} of {Math.ceil(8 / 6)} {/* Adjust based on total posts */}
            </span>
            
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage >= Math.ceil(8 / 6)}
            >
              Next →
            </Button>
          </div>

          {/* API Info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
              <strong>Content:</strong> Web development articles in English • 
              <strong> Source:</strong> Custom educational content
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default APIData;