import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
  /* ---------------------------------------- */
  let pagesArray = getPagesArray(totalPages)
  /* ---------------------------------------- */

  return (
    <div className="page__wrapper">
      {/* рисуем номера страниц  */}
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? 'page page__current' : 'page'}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
