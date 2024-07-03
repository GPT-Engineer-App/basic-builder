import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";

const TradingJournal = () => {
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({
    date: "",
    type: "buy",
    asset: "",
    quantity: "",
    price: "",
    notes: "",
  });
  const [filter, setFilter] = useState({
    date: "",
    type: "",
    asset: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrades([...trades, { ...form, id: Date.now() }]);
    setForm({
      date: "",
      type: "buy",
      asset: "",
      quantity: "",
      price: "",
      notes: "",
    });
  };

  const filteredTrades = trades.filter((trade) => {
    return (
      (!filter.date || trade.date === filter.date) &&
      (!filter.type || trade.type === filter.type) &&
      (!filter.asset || trade.asset.toLowerCase().includes(filter.asset.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Log a Trade</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input type="date" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select name="type" value={form.type} onValueChange={(value) => setForm({ ...form, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="asset">Asset</Label>
              <Input type="text" name="asset" value={form.asset} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input type="number" name="price" value={form.price} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Input type="text" name="notes" value={form.notes} onChange={handleChange} />
            </div>
            <Button type="submit">Log Trade</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Filter Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="filter-date">Date</Label>
              <Input type="date" name="date" value={filter.date} onChange={handleFilterChange} />
            </div>
            <div>
              <Label htmlFor="filter-type">Type</Label>
              <Select name="type" value={filter.type} onValueChange={(value) => setFilter({ ...filter, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="filter-asset">Asset</Label>
              <Input type="text" name="asset" value={filter.asset} onChange={handleFilterChange} />
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mt-4">
        <CardHeader>
          <CardTitle>Logged Trades</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredTrades.length > 0 ? (
            <ul className="space-y-2">
              {filteredTrades.map((trade) => (
                <li key={trade.id} className="border p-2 rounded">
                  <p>Date: {format(new Date(trade.date), "yyyy-MM-dd")}</p>
                  <p>Type: {trade.type}</p>
                  <p>Asset: {trade.asset}</p>
                  <p>Quantity: {trade.quantity}</p>
                  <p>Price: {trade.price}</p>
                  <p>Notes: {trade.notes}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground">No trades logged.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingJournal;