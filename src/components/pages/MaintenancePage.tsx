import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { ASSETS, URLS } from "@/config/constants";

export const MaintenancePage = () => {
  const statusColor = "var(--color-maintenance)";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <motion.div
        className="space-y-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={ASSETS.LOGO}
            alt="Urbanaut Logo"
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
          />
        </motion.div>

        {/* Status Icon */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
        >
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 sm:h-32 sm:w-32"
            style={{
              borderColor: statusColor,
              backgroundColor: `${statusColor}1a`,
              color: statusColor,
              boxShadow: `0 0 40px ${statusColor}40`,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Wrench size={64} />
            </motion.div>

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: statusColor }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                repeatDelay: 0.3,
              }}
            />
          </div>
        </motion.div>

        {/* Status Content */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Under Maintenance
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            We're currently performing scheduled maintenance to improve your
            experience. We'll be back online shortly. Thank you for your
            patience.
          </p>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div
            className="flex items-center gap-3 rounded-lg border px-6 py-3 backdrop-blur-sm"
            style={{
              borderColor: statusColor,
              backgroundColor: `${statusColor}1a`,
            }}
          >
            <motion.div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: statusColor }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="font-medium" style={{ color: statusColor }}>
              MAINTENANCE
            </span>
          </div>
        </motion.div>

        {/* Estimated time and social links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            Estimated return time: Soon
          </p>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs">Follow us for updates</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={URLS.TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href={URLS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={URLS.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href={URLS.TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
