import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';

interface AccordionProps {
  title: string;
  content: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleExpanded = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={styles.content}>
        {content}
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    padding: 15,
    backgroundColor: '#6200EE',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Accordion;
