import createConnector from '../core/createConnector';

export default createConnector({
  displayName: 'AlgoliaDynamicWidgets',

  getProvidedProps(props, _searchState, results) {
    if (!results || !results.results) {
      return { attributesToRender: [] };
    }

    // retrieve the facet order out of the results:
    // results.facetOrder.map(facet => facet.attribute)
    const facetOrder = [];

    return {
      attributesToRender: props.transformItems(facetOrder, {
        results: results.results,
      }),
    };
  },
});
