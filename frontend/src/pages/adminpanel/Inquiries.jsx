import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import SmallNavBar from "../../components/SmallNavBar";

function Inquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/enquiries", {
          params: { startDate, endDate }, // Pass start and end date
        });
        setEnquiries(response.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [startDate, endDate]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(enquiries.map((n) => n.id));
      return;
    }
    setSelected([]);
  };

  const handleSelectClick = (event, id) => {
    if (event.target.checked) {
      setSelected((prevSelected) => [...prevSelected, id]);
    } else {
      setSelected((prevSelected) => prevSelected.filter((item) => item !== id));
    }
  };
  const handleDeleteSingle = async (id) => {
    try {
      // Show SweetAlert confirmation
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      // If confirmed, delete the enquiry
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/enquiries/${id}`);
        setEnquiries((prevEnquiries) =>
          prevEnquiries.filter((enquiry) => enquiry.id !== id)
        );
        Swal.fire("Deleted!", "The enquiry has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      Swal.fire("Error!", "There was a problem deleting the enquiry.", "error");
    }
  };

  const handleDeleteSelected = async () => {
    try {
      // Show SweetAlert confirmation
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete all selected!",
      });

      // If confirmed, delete selected enquiries
      if (result.isConfirmed) {
        await axios.delete("http://localhost:3000/enquiries", {
          data: { ids: selected },
        });
        setEnquiries((prevEnquiries) =>
          prevEnquiries.filter((enquiry) => !selected.includes(enquiry.id))
        );
        setSelected([]);
        Swal.fire(
          "Deleted!",
          "The selected enquiries have been deleted.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error deleting enquiries:", error);
      Swal.fire(
        "Error!",
        "There was a problem deleting the enquiries.",
        "error"
      );
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  return (
    <div
      className="p-4 bg-brandDarkMaroon"
      style={{
        minHeight: "100vh",
      }}
    >
      <SmallNavBar />
      <div className="bg-brandLightMaroon/30 container p-16 border " style={{}}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#FFFFFF", // White
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={() => navigate("/admin-dashboard")}
            >
              <IoIosArrowBack />
            </button>
            <h2 style={{ color: "#FFFFFF", fontSize: "32px" }}>
              Enquiry Management
            </h2>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <Box>
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
            </Box>
            <Box>
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
            </Box>
          </div>
        </div>

        <button
          disabled={selected.length === 0}
          className="p-2 ml-2 bg-red-600 hover:bg-red-500 disabled:hover:bg-opacity-25 disabled:hover:cursor-not-allowed text-xl disabled:bg-opacity-25 transition-all duration-200  rounded-xl text-brandWhite"
          onClick={handleDeleteSelected}
        >
          <MdOutlineDeleteSweep />
        </button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={{ color: "#AAAAAA" }}>
                  <Checkbox
                    onChange={handleSelectAllClick}
                    checked={selected.length === enquiries.length}
                  />
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>First Name</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Last Name</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Email</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Phone</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Message</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Date</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    align="center"
                    sx={{ color: "#FFFFFF" }}
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : (
                enquiries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell padding="checkbox" sx={{ color: "#FFFFFF" }}>
                        <Checkbox
                          checked={selected.indexOf(enquiry.id) !== -1}
                          onChange={(event) =>
                            handleSelectClick(event, enquiry.id)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }}>
                        {enquiry.first_name}
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }}>
                        {enquiry.last_name}
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }}>
                        {enquiry.email_address}
                      </TableCell>
                      <TableCell sx={{ color: "#FFFFFF" }}>
                        {enquiry.phone_number}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#FFFFFF",
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {enquiry.message}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#FFFFFF",
                          maxWidth: "100px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {new Date(enquiry.created_at).toLocaleString("en-GB", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: false,
                        })}
                      </TableCell>
                      <TableCell>
         

                        <button
                          className="p-2 ml-2 bg-red-600 hover:bg-red-500 disabled:hover:bg-opacity-25 disabled:hover:cursor-not-allowed text-xl disabled:bg-opacity-25 transition-all duration-200  rounded-xl text-brandWhite"
                          onClick={() => handleDeleteSingle(enquiry.id)}
                        >
                          <MdOutlineDelete />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={enquiries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default Inquiries;
