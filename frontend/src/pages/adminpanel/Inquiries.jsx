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

import { useNavigate } from "react-router-dom";

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
    <div className="p-4 h-screen">
      <div className="bg-brandLightMaroon/30 rounded-xl h-[100%] p-4">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/admin-dashboard")}
        >
          Back to Admin
        </Button>
        <div className="flex gap-4">
          <Box sx={{ my: 2 }}>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteSelected}
          disabled={selected.length === 0}
        >
          Delete Selected
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={handleSelectAllClick}
                    checked={selected.length === enquiries.length}
                  />
                </TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : (
                enquiries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selected.indexOf(enquiry.id) !== -1}
                          onChange={(event) =>
                            handleSelectClick(event, enquiry.id)
                          }
                        />
                      </TableCell>
                      <TableCell>{enquiry.first_name}</TableCell>
                      <TableCell>{enquiry.last_name}</TableCell>
                      <TableCell>{enquiry.email_address}</TableCell>
                      <TableCell>{enquiry.phone_number}</TableCell>
                      <TableCell>{enquiry.message}</TableCell>
                      <TableCell>
                        {new Date(enquiry.created_at).toLocaleString("en-GB", {
                          weekday: "short", // Example: "Wed"
                          year: "numeric", // Example: "2024"
                          month: "short", // Example: "Dec"
                          day: "2-digit", // Example: "04"
                          hour: "2-digit", // Example: "18"
                          minute: "2-digit", // Example: "51"
                          second: "2-digit", // Example: "22"
                          hour12: false, // For 24-hour time format, set this to false
                        })}
                      </TableCell>

                      <TableCell>
                        <Button
                          color="secondary"
                          onClick={() => handleDeleteSingle(enquiry.id)}
                        >
                          Delete
                        </Button>
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
