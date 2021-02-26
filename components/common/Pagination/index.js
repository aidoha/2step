import { Wrap, Page, Control } from './style'
import ArrowControl from '../../icons/boldArrow'

class Pagination extends React.Component {
  render() {
    const { onPrevPage, onNextPage, totalPages, onPageChange } = this.props
    const currentPage = parseInt(this.props.currentPage, 10)
    const pages = Array(totalPages - 1 + 1)
      .fill()
      .map((item, index) => 1 + index)
    return (
      <Wrap>
        <Control onClick={() => onPrevPage()} left>
          <ArrowControl rotate="-90" />
        </Control>
        {pages.length > 7 && (currentPage < 4 || !currentPage) ? (
          <React.Fragment>
            <Page
              onClick={() => onPageChange(1)}
              active={parseInt(currentPage, 10) === 1 || !currentPage}>
              1
            </Page>
            <Page
              onClick={() => onPageChange(2)}
              active={parseInt(currentPage, 10) === 2}>
              2
            </Page>
            <Page
              onClick={() => onPageChange(3)}
              active={parseInt(currentPage, 10) === 3}>
              3
            </Page>
            <Page
              onClick={() => onPageChange(4)}
              active={parseInt(currentPage, 10) === 4}>
              4
            </Page>
            ...
            <Page
              onClick={() => onPageChange(totalPages)}
              active={parseInt(currentPage, 10) === totalPages}>
              {totalPages}
            </Page>
          </React.Fragment>
        ) : null}
        {pages.length > 7 && currentPage === 4 ? (
          <React.Fragment>
            <Page
              onClick={() => onPageChange(1)}
              active={parseInt(currentPage, 10) === 1 || !currentPage}>
              1
            </Page>
            <Page
              onClick={() => onPageChange(2)}
              active={parseInt(currentPage, 10) === 2}>
              2
            </Page>
            <Page
              onClick={() => onPageChange(3)}
              active={parseInt(currentPage, 10) === 3}>
              3
            </Page>
            <Page
              onClick={() => onPageChange(4)}
              active={parseInt(currentPage, 10) === 4}>
              4
            </Page>
            <Page
              onClick={() => onPageChange(5)}
              active={parseInt(currentPage, 10) === 5}>
              5
            </Page>
            <Page
              onClick={() => onPageChange(6)}
              active={parseInt(currentPage, 10) === 6}>
              6
            </Page>
            ...
            <Page
              onClick={() => onPageChange(totalPages)}
              active={parseInt(currentPage, 10) === totalPages}>
              {totalPages}
            </Page>
          </React.Fragment>
        ) : null}
        {pages.length > 7 &&
          currentPage > 3 &&
          currentPage < totalPages - 3 &&
          currentPage !== 4 && (
            <React.Fragment>
              <Page
                onClick={() => onPageChange(1)}
                active={parseInt(currentPage, 10) === 1 || !currentPage}>
                1
              </Page>
              ...
              {pages.slice(currentPage - 3, currentPage + 2).map(val => (
                <Page
                  onClick={() => onPageChange(val)}
                  active={parseInt(currentPage, 10) === val}>
                  {val}
                </Page>
              ))}
              ...
              <Page
                onClick={() => onPageChange(totalPages)}
                active={parseInt(currentPage, 10) === totalPages}>
                {totalPages}
              </Page>
            </React.Fragment>
          )}
        {pages.length > 7 && currentPage > totalPages - 4 && (
          <React.Fragment>
            <Page
              onClick={() => onPageChange(1)}
              active={parseInt(currentPage, 10) === 1 || !currentPage}>
              1
            </Page>
            ...
            {pages.slice(totalPages - 5, totalPages).map(val => (
              <Page
                onClick={() => onPageChange(val)}
                active={parseInt(currentPage, 10) === val}>
                {val}
              </Page>
            ))}
          </React.Fragment>
        )}

        {pages.length < 7 &&
          pages.map(val => (
            <Page
              onClick={() => onPageChange(val)}
              active={
                currentPage ? parseInt(currentPage, 10) === val : val === 1
              }>
              {val}
            </Page>
          ))}

        <Control onClick={() => onNextPage()} right>
          <ArrowControl rotate="90" />
        </Control>
      </Wrap>
    )
  }
}

export default Pagination
