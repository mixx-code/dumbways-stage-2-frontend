import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";

const Cart = () => {
    return (
      <>
        <Button asChild variant="secondary" className="mb-4">
          <Link to="/">Back to Home</Link>
        </Button>
        <div className="flex justify-content-start">
          <h1 className="text-2xl font-bold mb-5">Cart</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Qty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-center">Ganci</TableCell>
              <TableCell className="text-center">Paid</TableCell>
              <TableCell className="text-center">Rp. 30000</TableCell>
              <TableCell className="text-center">1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell className="text-center">Galon</TableCell>
              <TableCell className="text-center">Paid</TableCell>
              <TableCell className="text-center">Rp. 19000</TableCell>
              <TableCell className="text-center">1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
}

export default Cart;