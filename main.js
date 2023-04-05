app.get('/breadth-first-search/:startNodeId', async (req, res) => {
    const startNodeId = req.params.startNodeId;
    const startNode = await Node.findById(startNodeId);
    if (!startNode) {
      return res.status(404).send('Start node not found');
    }
  
    const queue = [startNode];
    const results = [];
  
    while (queue.length > 0) {
      const node = queue.shift();
      results.push(node.value);
  
      if (node.left) {
        const leftNode = await Node.findById(node.left);
        queue.push(leftNode);
      }
  
      if (node.right) {
        const rightNode = await Node.findById(node.right);
        queue.push(rightNode);
      }
    }
  
    res.send(results);
  });
  