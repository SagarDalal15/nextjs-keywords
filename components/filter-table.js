import React from "react";
import { useTable } from "react-table";
import TableScrollbar from "react-table-scrollbar";

export default function FilterTable(props) {
  const data = React.useMemo(() => props.data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Keywords",
        accessor: "keyword", // accessor is the "key" in the data
      },
      {
        Header: "Goal",
        accessor: "goal",
      },
      {
        Header: "Matches",
        accessor: "matches",
      },
      {
        Header: "Search Status",
        accessor: "search_status",
      },
      {
        Header: "Delete Keyword",
        accessor: "delete_keyword",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>The terms you are tracking</div>
        <div style={{ fontSize: "14px", padding: "5px" }}>
          The data will refresh every 5 min
        </div>
      </div>
      <TableScrollbar height="260px">
        <table
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column}
                    {...column.getHeaderProps()}
                    style={{
                      background: "white",
                      color: "black",
                      padding: "15px 0px",
                      width: "176px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        key={cell}
                        {...cell.getCellProps()}
                        style={{
                          padding: "15px 0px",
                          borderBottom: "solid 1px rgb(0,0,0,0.2)",
                          borderTop: "solid 1px rgb(0,0,0,0.2)",
                          background: "white",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableScrollbar>
    </div>
  );
}
