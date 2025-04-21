import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="flex flex-col items-center"
      >
        <motion.div className="text-4xl font-bold font-display tracking-tight mb-8">
          <span className="text-black">NØT</span>
          <span className="text-red-700">404</span>
        </motion.div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="h-full bg-gradient-to-r from-red-600 to-red-700"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};