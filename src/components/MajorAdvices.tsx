import React, { useEffect, useMemo, useState } from 'react';
import {
  useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination,
} from 'react-table';

import { Icon } from '../components/uikit';
import { ArrowLeft, ArrowRight } from 'iconsax-react';
import styles from '../styles/major-advice.module.scss';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const MajorAdvices = () => {
  const [adviceData, setAdviceData] = useState(null);

  useEffect(() => {
    fetch('/api/advices').then((res) => { return res.json(); }).then((json) => {
      setAdviceData(json);
    });
  }, []);

  if (!adviceData) {
    return (
      <div className={`${styles.pageWrapper} padding--page major-cat-clr max-width--page`}>
        <p>در حال دریافت داده</p>
      </div>
    );
  }

  return <Table adviceData={adviceData} />;
};

const Table = ({ adviceData }) => {
  const data = useMemo(() => { return adviceData; }, []);

  const columns = useMemo(
    () => {
      return [
        // {
        //   Header: 'شناسه',
        //   accessor: 'id', // accessor is the "key" in the data
        //   disableFilters: true,
        // },
        // {
        //   Header: 'گروه تحصیلی',
        //   accessor: 'educationGroup',
        // },
        {
          Header: 'رشته',
          accessor: 'major',
        },
        // {
        //   Header: 'سابقه کار',
        //   accessor: 'workExperience',
        // },
        // {
        //   Header: 'سابقه کار مرتبط',
        //   accessor: 'workExperienceRelated',
        // },
        {
          Header: ' توصیه به کسانی می‌خواهند این رشته را انتخاب کنند',
          accessor: 'advice',
        },
      ];
    },
    [],
  );

  // const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = useMemo(
    () => {
      return {
        Filter: ColumnFilter,
      };
    },
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 2 },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const paginationProps = {
    pageIndex, pageOptions, canPreviousPage, previousPage, nextPage, canNextPage, pageSize, setPageSize,
  };

  return (

    <div className={`${styles.pageWrapper} padding--page major-cat-clr max-width--page`}>
      <div className={`${styles.filtersWrapper} flex wrap gap padding-block--xs`}>
        {/* <ColumnFilters headerGroups={headerGroups} /> */}
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {/* <tr>
              <tr colSpan={2} className="filter-rows" />
            </tr> */}
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()} className="title">
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => { return <td {...cell.getCellProps()} className="font-size letter-spacing--xs">{cell.render('Cell')}</td>; })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => {
                  return (
                    <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
      <PaginationControls {...paginationProps} />
    </div>
  );
};

export default MajorAdvices;

const PaginationControls = ({
  pageIndex, pageOptions, canPreviousPage, previousPage, nextPage, canNextPage, pageSize, setPageSize, showPageSize,
}) => {
  return (
    <div className="padding-block--xs">
      {showPageSize
        && (
          <select
            value={pageSize}
            onChange={(e) => { return setPageSize(Number(e.target.value)); }}
          >
            {[10, 25, 50].map((sizeOfPage) => {
              return (
                <option key={sizeOfPage} value={sizeOfPage}>
                  Show
                  {' '}
                  {sizeOfPage}
                </option>
              );
            })}
          </select>
        )}
      <p className="fa-num">{`برگ ${pageIndex + 1} از ${pageOptions.length}`}</p>
      <div className="flex j-space-between a-center">
        <button onClick={() => { return previousPage(); }} disabled={!canPreviousPage} className="button" type="button">
          <Icon icon={ArrowRight} alt="" />
          قبل
        </button>
        <button onClick={() => { return nextPage(); }} disabled={!canNextPage} className="button" type="button">
          بعد
          <Icon icon={ArrowLeft} alt="" />
        </button>
      </div>
    </div>

  );
};

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((v) => {
    setFilter(v || undefined);
  }, 1000);
  return (
    <span className={styles.inputWrapper}>
      جستجو در جدول:
      <input
        placeholder="مثلا «معماری» "
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className={styles.input}
        size={1}
      />
    </span>
  );
};

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className="thinner flex width--100 ">
      <input
        placeholder="مثلا «برق»"
        value={filterValue || ''}
        onChange={(e) => { return setFilter(e.target.value); }}
        className={styles.input}
      // size={1}
      />
    </div>
  );
};

const ColumnFilters = ({ headerGroups }) => {
  return headerGroups.map((headerGroup) => {
    return (headerGroup.headers.map((column) => {
      if (column.Header !== 'رشته') return null;
      return (
        <span className={styles.inputWrapper}>
          جستجو بین
          {' '}
          {column.render('Header')}
          &zwnj;ها:
          <div className="width--100">{column.render('Filter')}</div>
        </span>
      );
    }));
  });
};
