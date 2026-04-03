-- Customers Table
CREATE TABLE Customers (
    id INTEGER PRIMARY KEY,
    zendesk_id INTEGER,
    stripe_id TEXT,
    xero_id TEXT,
    name TEXT,
    trading_names TEXT,
    abn TEXT,
    acn TEXT,
    website TEXT,
    email TEXT,
    additionaL_billing_email TEXT,
    phone TEXT,
    billing_address_line1 TEXT,
    billing_address_line2 TEXT,
    billing_address_city TEXT,
    billing_address_state TEXT,
    billing_address_postal_code TEXT,
    billing_address_country TEXT,
    shipping_address_line1 TEXT,
    shipping_address_line2 TEXT,
    shipping_address_city TEXT,
    shipping_address_state TEXT,
    shipping_address_postal_code TEXT,
    shipping_address_country TEXT,
    notes TEXT
);

-- Users Table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    zendesk_id INTEGER,
    email TEXT,
    name TEXT,
    phone TEXT,
    role TEXT,
    last_login TEXT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

-- Domains Table
CREATE TABLE Domains (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    domain_name TEXT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

-- Support Plans Table
CREATE TABLE SupportPlans (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    price REAL
);

-- Software Plans Table
CREATE TABLE SoftwarePlans (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    price REAL
);

-- Backup Plans Table
CREATE TABLE BackupPlans (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    price REAL
);

-- Subscriptions Table
CREATE TABLE Subscriptions (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    support_plan_id INTEGER,
    software_plan_id INTEGER,
    backup_plan_id INTEGER,
    stripe_subscription_id TEXT,
    status TEXT,
    start_date TEXT,
    end_date TEXT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id),
    FOREIGN KEY (support_plan_id) REFERENCES SupportPlans(id),
    FOREIGN KEY (software_plan_id) REFERENCES SoftwarePlans(id),
    FOREIGN KEY (backup_plan_id) REFERENCES BackupPlans(id)
);
