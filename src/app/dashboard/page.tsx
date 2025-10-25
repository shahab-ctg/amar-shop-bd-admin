
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "৳2,45,365",
      change: "+12.5%",
      isPositive: true,
      icon: DollarSign,
      bgColor: "from-pink-500 to-rose-600",
    },
    {
      title: "Total Orders",
      value: "1,235",
      change: "+8.2%",
      isPositive: true,
      icon: ShoppingCart,
      bgColor: "from-purple-500 to-indigo-600",
    },
    {
      title: "Total Products",
      value: "567",
      change: "+5.1%",
      isPositive: true,
      icon: Package,
      bgColor: "from-rose-500 to-pink-600",
    },
    {
      title: "Total Customers",
      value: "890",
      change: "-2.4%",
      isPositive: false,
      icon: Users,
      bgColor: "from-fuchsia-500 to-purple-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1234",
      customer: "Ayesha Rahman",
      amount: "৳1,1250",
      status: "pending",
      time: "2 hours ago",
    },
    {
      id: "#ORD-1233",
      customer: "Nadia Sultana",
      amount: "৳850",
      status: "delivered",
      time: "5 hours ago",
    },
    {
      id: "#ORD-1232",
      customer: "Tasnim Jahan",
      amount: "৳2250",
      status: "processing",
      time: "1 day ago",
    },
    {
      id: "#ORD-1231",
      customer: "Sadia Khan",
      amount: "৳650",
      status: "cancelled",
      time: "1 day ago",
    },
    {
      id: "#ORD-1230",
      customer: "Rima Ahmed",
      amount: "৳1,450",
      status: "delivered",
      time: "2 days ago",
    },
  ];

  const topProducts = [
    { name: "Matte Lipstick Set", sold: 450, revenue: "৳18,০০০", image: "💄" },
    { name: "Premium Face Serum", sold: 320, revenue: "৳38,৪০০", image: "✨" },
    { name: "Luxury Perfume", sold: 280, revenue: "৳98,০০০", image: "🌸" },
    {
      name: "Eye Shadow Palette",
      sold: 150,
      revenue: "৳85,5০০",
      image: "🎨",
    },
  ];

  // Fixed: Add proper TypeScript type for status parameter
  const getStatusBadge = (
    status: "pending" | "processing" | "delivered" | "cancelled"
  ) => {
    const styles = {
      pending: { bg: "bg-amber-100", text: "text-amber-700", icon: Clock },
      processing: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        icon: AlertCircle,
      },
      delivered: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        icon: CheckCircle,
      },
      cancelled: { bg: "bg-red-100", text: "text-red-700", icon: XCircle },
    };

    const style = styles[status];
    const Icon = style.icon;
    const labels = {
      pending: "Pending",
      processing: "Processing",
      delivered: "Delivered",
      cancelled: "Cancelled",
    };

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
      >
        <Icon className="w-3.5 h-3.5" />
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#167389] to-[#167389] mb-2">
            Dashboard Overview
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Welcome back! Here is what is happening with your beauty store
            today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${stat.bgColor} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs sm:text-sm font-semibold ${
                        stat.isPositive ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {stat.isPositive ? (
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                <span className="hidden sm:inline">Recent Orders</span>
                <span className="sm:hidden">Orders</span>
              </h2>
              <button className="text-xs sm:text-sm text-pink-600 hover:text-pink-700 font-semibold hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-200 border border-pink-100"
                >
                  <div className="flex-1 w-full sm:w-auto mb-3 sm:mb-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                      <span className="font-bold text-gray-800 text-sm sm:text-base">
                        {order.id}
                      </span>
                      {getStatusBadge(
                        order.status as
                          | "pending"
                          | "processing"
                          | "delivered"
                          | "cancelled"
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {order.customer}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{order.time}</p>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <p className="text-lg sm:text-xl font-bold text-pink-600">
                      {order.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                <span className="hidden sm:inline">Top Products</span>
                <span className="sm:hidden">Top</span>
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {topProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-200 border border-pink-100"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-sm flex-shrink-0">
                    {product.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Sold: {product.sold}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs sm:text-sm font-bold text-pink-600">
                      {product.revenue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
