const BEST_SELLERS_COLUMNS = [
    { id: 'listName', label: 'List Name', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 100 },
    {
      id: 'author',
      label: 'Author(s)',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'description',
      label: 'Description',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'publisher',
      label: 'Publisher',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'rank',
      label: 'Current Rank',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'amazon_product_url',
      label: 'Purchase Links',
      minWidth: 170,
      align: 'right',
    },
  ];

  module.exports = {
    BEST_SELLERS_COLUMNS,
  };