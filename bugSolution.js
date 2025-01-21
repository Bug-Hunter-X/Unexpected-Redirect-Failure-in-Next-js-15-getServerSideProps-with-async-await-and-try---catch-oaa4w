The issue stems from how the `redirect` function interacts with the `try...catch` block and the asynchronous nature of the data fetching. By restructuring the code to always execute the `redirect` after the asynchronous operation (regardless of success or failure), we guarantee the redirect's consistent execution.