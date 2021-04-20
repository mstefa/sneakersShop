import React from "react";
import { Link } from "react-router-dom";
import { StyledAdmin } from "./StyledAdmin";

export default function Admin() {
  return (
    <StyledAdmin>

        <Link to="/admin/products">
          <div>
          <i className="fas fa-shoe-prints"></i>
            Products 
          </div>
        </Link>

        <Link to="/admin/stock"> 
          <div>
          <i className="fas fa-layer-group"></i>
            Stock 
          </div>
        </Link>

        <Link to="/admin/discounts"> 
          <div>
          <i className="fas fa-tags"></i>
            Discounts
          </div>
        </Link>

        <Link to="/admin/category"> 
          <div>
          <i className="fas fa-list"></i>
            Categories 
          </div>
        </Link>

        <Link to="/admin/orders"> 
          <div>
          <i className="fas fa-file-invoice-dollar"></i>
            Orders 
          </div>
        </Link>

        <Link to="/admin/statistics"> 
          <div>
          <i className="fas fa-chart-pie"></i>
            Statistics
          </div>
        </Link>

        <Link to="/admin/users"> 
          <div>
          <i className="fas fa-users"></i>
            Users 
          </div>
        
        </Link>

    </StyledAdmin>
  )
}
